// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "The Treehouse",
      description:
        "To the two friends, the treehouse was much more than a treehouse. It was a sanctuary away from the other kids where they could be themselves without being teased or bullied. It was their secret fortress hidden high in the branches of a huge oak that only they knew existed. At least that is what they thought. They were more than a little annoyed when their two younger sisters decided to turn the treehouse into a princess castle by painting the inside pink and putting glitter everywhere.",
    },
    {
      id: 2,
      name: "The answer was within her reach",
      description:
        "The answer was within her reach. It was hidden in a box and now that box sat directly in front of her. She'd spent years searching for it and could hardly believe she'd finally managed to find it. She turned the key to unlock the box and then gently lifted the top. She held her breath in anticipation of finally knowing the answer she had spent so much of her time in search of. As the lid came off she could see that the box was empty.",
    },
  ]);
}
