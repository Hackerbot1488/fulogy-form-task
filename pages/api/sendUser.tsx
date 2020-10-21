// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await fetch("http://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-token-access": "random",
		},
		body: JSON.stringify(req.body),
	});
	if (response.ok) {
		res.statusCode = 200;
		res.json({ message: "success" });
	} else {
		res.statusCode = 500;
		res.json({ message: "Something went wrong" });
	}
};
