import React from "react";
import { localise } from "../../../utils/localize";
import SingleTeam from "./SingleTeam";
export default function Teamarea({ content }) {
  const team = content.team;
  return (
    <div className="ac-team-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ac-team-title-section text-center mb-60">
              <h3 className="ac-team-title">
                {localise(content.teamtitle, content.teamtitlearb)}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {team.map((team) => (
            <SingleTeam key={team.id} team={team.fields} />
          ))}
        </div>
      </div>
    </div>
  );
}
