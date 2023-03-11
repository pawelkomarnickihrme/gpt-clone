const { Configuration, OpenAIApi } = require('openai');

async function generateResponse() {
  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

  const completion = async () =>
    await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Hello world',
    });
  const respone = await completion();
  return respone.data.choices[0].text;
}

export default generateResponse;
