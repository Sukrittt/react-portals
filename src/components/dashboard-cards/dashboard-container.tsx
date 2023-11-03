"use client";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

// import "react-mosaic-component/react-mosaic-component.css";
import "../../app/styles/react-mosaic-component.css";

// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Chats from "@/components/dashboard-cards/chats";
import Community from "@/components/dashboard-cards/community";
import Prediction from "@/components/dashboard-cards/prediction";
import ModActions from "@/components/dashboard-cards/mod-actions";
import BatchReporting from "@/components/dashboard-cards/batch-reporting";

export type ViewTypes = "a" | "b" | "c" | "d" | "e";

const ELEMENT_MAP: Record<ViewTypes, JSX.Element> = {
  a: <Prediction />,
  b: <Chats />,
  c: <Community />,
  d: <ModActions />,
  e: <BatchReporting />,
};

const listOfIds = {
  a: "Prediction",
  b: "Chats",
  c: "Community",
  d: "Mod Actions",
  e: "Batch Reporting",
};

export const DashboardContainer = () => {
  return (
    <Mosaic<string>
      renderTile={(id, path) => (
        <MosaicWindow<ViewTypes> path={path} title={listOfIds[id as ViewTypes]}>
          {ELEMENT_MAP[id as ViewTypes]}
        </MosaicWindow>
      )}
      initialValue={{
        direction: "row",
        first: {
          direction: "column",
          first: "a",
          second: "b",
        },
        second: {
          direction: "column",
          first: "c",
          second: "d",
        },
        splitPercentage: 60,
      }}
    />
  );
};
