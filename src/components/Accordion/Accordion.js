import * as React from "react";
import experience from "@/app/data/Experience";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const MuiAccordion = () => {
  return (
    <div>
      {experience.map((item, index) => (
        <div key={index}>
          <Accordion
            defaultExpanded={index == 0 ? true : false}
            className="!bg-transparent !border !border-gray-700 !rounded-[10px] !text-[#fbfbfb]"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#00d070" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex justify-between w-[100%]">
                <div className="flex items-center">
                  {item.designation} @ {item.companyName}
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    {item.joinDate} - {item.endDate}
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <hr className="mx-4 border-gray-700" />
            <AccordionDetails>
              <div className="flex flex-col">
                <div className="flex gap-8 text-[#c4c4c4] py-2 max-[500px]:flex-col max-[800px]:gap-2">
                  <div className="flex gap-2">
                    <FmdGoodRoundedIcon />
                    <div>
                      {item.location}, {item.country}
                    </div>
                  </div>
                  <a href={item.website}>
                    <div className="flex gap-2">
                      <AttachFileRoundedIcon />
                      <div className="flex flex-wrap">{item.website}</div>
                    </div>
                  </a>
                </div>
                <div className="py-2 text-xl">{item.titleText}</div>
                <div className="flex flex-wrap gap-4 text-[#c4c4c4] py-2 text-xs">
                  {item.technologies.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default MuiAccordion;
