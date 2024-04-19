import express from "express";
const router = express.Router();
import path from "path";
import fs from "fs";
import readLine from "readline";
let filePath = path.join(__dirname, '../logs/api-access.log');

const logRegex = /(\d+\.\d+\.\d+\.\d+) - (?<userid>\S+) \[([^:]+:\d{2}:\d{2}:\d{2} \+\d{4})\]  "(\w+) (\/[^ ]*) HTTP\/(\d\.\d)" (\d{3}) (\d+) "-" "([^"]+)" "([^"]+)" (\d+\.\d+)/;


router.get("/", (req, res) => {
    let data = {}
    const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' })
    const readlineInterface = readLine.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })
    const errorCounts: { [key: string]: number } = {};
    readlineInterface.on('line', async (line: string) => {
        const match = logRegex.exec(line);
        if (match && match.groups) {
            const status = parseInt(match[7]);
            if (status >= 400) {
                const date = new Date(match[3].replace(':', ' '));
                const hourKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:00`;
                if (errorCounts[hourKey]) {
                    errorCounts[hourKey]++;
                } else {
                    errorCounts[hourKey] = 1;
                }
            }
        }
    });

    readlineInterface.on('close', async () => {
        res.send(errorCounts);
    });

})


export default router;
