#! /usr/bin/env node
console.log("Hello, from the reddit CLI!");

import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

const { argv } = yargs(process.argv);
console.log(process.argv);

const res = await fetch("https://www.reddit.com/.json");
const data = await res.json();

console.log(data);

const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://reddit.com${randomPost.data.permalink}`;

if (argv.print) {
    console.log(randomPost.data.title);
  console.log({
    title: randomPost.data.title,
    link: link,
  });
} else {
    open(link)
}
