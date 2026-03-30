import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function analyzeFlavor(ingredients: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a quirky Dr Pepper flavor scientist. A user just mixed these ingredients with Dr Pepper: ${ingredients.join(", ")}. 
      Generate a creative, shareable 'Flavor Profile' name (e.g., 'The Tropical Maroon', 'Syrup Symphony #9') and a short, witty 2-sentence description of the taste. 
      Return as JSON: { "name": "...", "description": "..." }`,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Flavor analysis failed:", error);
    return {
      name: "The Mystery Mix",
      description: "A bold experiment in flavor. Truly one of a kind, even if we can't quite describe it yet."
    };
  }
}
