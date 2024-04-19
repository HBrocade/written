import express from "express";
const router = express.Router();

const nestedArray: (number | (number | number[])[])[] = [1, [2, 3, [5]], 4];
router.get("/", (req, res) => {
    let NestedArray: (number | number[])[] = []
    flatten(nestedArray)
    function flatten(nestedArray: any[]) {
        for (let i = 0; i < nestedArray.length; i++) {
            if (Array.isArray(nestedArray[i])) {
                flatten(nestedArray[i])
            } else {
                NestedArray.push(nestedArray[i])
            }
        }
    }
    res.send(NestedArray)

})


export default router;