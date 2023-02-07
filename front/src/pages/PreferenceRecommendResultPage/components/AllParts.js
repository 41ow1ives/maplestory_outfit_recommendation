import React from "react";
import Grid from "@mui/material/Grid";
import AllCodiPartButton from "./AllCodiPartButton";
import { Stack } from "@mui/system";
import basicitem from "../../../assets/images/basicItem.png";
import fixitme from "../../../assets/images/fixItem.png";
import Typography from "@mui/material/Typography";

function AllParts({ fixPartList, recommendData }) {
  const codiPartName = {
    Hat: "모자",
    Hair: "헤어",
    Face: "성형",
    Top: "상의",
    Bottom: "하의",
    Shoes: "신발",
    Weapon: "무기",
  };

  const collectAllPart = () => {
    const all = [];
    const codiPartEngName = Object.keys(codiPartName);
    for (let idx = 0; idx < codiPartEngName.length; idx++) {
      if (fixPartList.includes(codiPartEngName[idx])) {
        all.push(
          <Grid xs={1.3} className="button-fixitem" key={codiPartEngName[idx]}>
            <div className="img-instack">
              <img alt="" src={fixitme} width="180" height="250"></img>
            </div>
            <div className="img-inbox">
              <img
                alt=""
                src={recommendData[codiPartEngName[idx]]["gcs_image_url"]}
                width="70%"
                height="70%"
              />
            </div>
            <div className="text-inboxname">
              <Typography fontFamily={"NanumSquareAcr"}>
                {recommendData[codiPartEngName[idx]]["name"]}
              </Typography>
            </div>
            <div className="text-inboxpart">
              <Typography fontFamily={"NanumSquareAceb"} fontSize="large">
                {codiPartName[codiPartEngName[idx]]}
              </Typography>
            </div>
          </Grid>,
        );
      } else {
        all.push(
          <Grid xs={1.3} className="button-fixitem" key={codiPartEngName[idx]}>
            <div className="img-instack">
              <img alt="" src={basicitem} width="170" height="250"></img>
            </div>
            <div className="img-inbox">
              <img
                alt=""
                src={recommendData[codiPartEngName[idx]]["gcs_image_url"]}
                width="70%"
                height="70%"
              />
            </div>
            <div className="text-inboxname">
              <Typography fontFamily={"NanumSquareAcr"}>
                {recommendData[codiPartEngName[idx]]["name"]}
              </Typography>
            </div>
            <div className="text-inboxpart">
              <Typography fontFamily={"NanumSquareAceb"} fontSize="large">
                {codiPartName[codiPartEngName[idx]]}
              </Typography>
            </div>
          </Grid>,
        );
      }
    }
    return all;
  };

  const buttonCollection = (
    <Grid container spacing={1} className="box-bestcodibox">
      <Grid item xs></Grid>
      {collectAllPart()}
      <Grid item xs></Grid>
    </Grid>
  );
  return buttonCollection;
}

export default AllParts;