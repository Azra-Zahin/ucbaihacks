const { HfInference } = require("@huggingface/inference");
const HF_ACCESS_TOKEN = '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';
const hf = new HfInference(HF_ACCESS_TOKEN);
const model = "deepset/roberta-base-squad2";

async function generateText() {
    const current_skills = 'Python'
    const result = await hf.questionAnswering({model: model, inputs: {
        question: 'What is a list of other skills the person is missing for the hackathon?',
        context: `For an AI project, technical skills such as Python, C++, Java, R, JavaScript are needed. A person has the following technical skills: ${current_skills}.`
        }
    })

    console.log(result.answer);
}

generateText();
