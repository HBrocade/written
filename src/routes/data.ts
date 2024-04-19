import express from "express";
const router = express.Router();

let numData: number[] = [];
router.get("/", (req, res) => {
    let outPut = Array.from(new Set(numData));
    numData = outPut.sort((a, b) => a - b);
    res.send(numData);
})

router.post("/", (req, res) => {
    let data = req.body;
    data = data.Input
    if (data.length === 10) {
        try {
            numData = data
            res.send('Data passed in successfully');
        } catch (error) {
            res.send('Error in passing parameters');
            return
        }
    } else if (data.length === 1) {
        try {
            let num: number = data[0];
            if (numData.filter(x => x === num).length === 0) {
                numData.push(num);
            }
            res.send('Data passed in successfully');
        } catch (error) {
            res.send('Error in passing parameters');
            return
        }
    } else {
        res.send('Error in passing parameters');
        return
    }
})

export default router;