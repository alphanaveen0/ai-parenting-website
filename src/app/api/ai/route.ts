import { getAIAnswer } from "@/lib/ai-engine";
import type { Lang } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let question = "";
  let lang: Lang = "hi";
  try {
    const body = await req.json();
    question = String(body?.question ?? "");
    lang = body?.lang === "en" ? "en" : "hi";
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const structured = getAIAnswer(question, lang);

  const apiKey = process.env.OPENAI_API_KEY;
  if (apiKey && question.trim()) {
    try {
      const system =
        lang === "hi"
          ? "आप 'पालन-मित्र AI' हैं — भारतीय माता-पिता के लिए एक गर्मजोशी भरा, सहानुभूतिपूर्ण और विशेषज्ञ पेरेंटिंग सलाहकार। हमेशा शुद्ध हिंदी में जवाब दें। जवाब में कारण, समाधान, दैनिक रूटीन, गतिविधि, डाइट और एक प्रेरक संदेश शामिल करें। संक्षिप्त, व्यावहारिक और भारतीय संदर्भ के अनुसार उत्तर दें।"
          : "You are 'Palan-Mitra AI', a warm, empathetic, expert parenting advisor for Indian parents. Reply in clear English. Include reasons, solutions, a daily routine, an activity, diet tips and a motivational message. Be concise, practical and India-relevant.";

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: system },
            { role: "user", content: question },
          ],
          temperature: 0.7,
          max_tokens: 700,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const freeform = data?.choices?.[0]?.message?.content as string | undefined;
        if (freeform) {
          return Response.json({ answer: structured, freeform, source: "ai" });
        }
      }
    } catch {
      // fall through to rule-based
    }
  }

  return Response.json({ answer: structured, source: "rules" });
}
