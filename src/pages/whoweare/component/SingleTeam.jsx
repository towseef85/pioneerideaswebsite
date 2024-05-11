import React from "react";
import { Link } from "react-router-dom";
import { localise } from "../../../utils/localize";
import shape1 from "../../../assets/img/team/team-shape-5.1.png";
import shape2 from "../../../assets/img/team/team-shape-5.2.png";

export default function SingleTeam({ team }) {
  const { id, img, name, namearb, position, positionarb } = team;
  return (
    <div className="col-xl-3 col-lg-3 col-md-6  wow tpfadeUp">
      <div className="tpteam mb-30">
        <div className="tpteam__shape-1">
          <img src={shape1} alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src={shape2} alt="" />
        </div>
        <div className="tpteam__thumb">
          <img className="w-100" src={img.fields.file.url} alt="" />
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href="#">
              <a>{localise(name, namearb)}</a>
            </Link>
          </h4>
          <h5 className="tp-team-sm-subtitle">
            <a href="#">{localise(position, positionarb)}</a>
          </h5>
          {/* {social_links.map((l, i) => (
              <a key={i} href={l.link} target={l.target}>
                <i className={l.icon}></i>
              </a>
            ))} */}
        </div>
      </div>
    </div>
  );
}
