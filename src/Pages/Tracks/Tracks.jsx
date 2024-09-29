import React from "react";
import Mutc_tracks from "../../Components/MUTC_Tracks/Mutc_tracks";
import RegistrationForm from "../../Components/forms/form";
import MutcFooter from "../../Components/footer/footer";

function Tracks() {
  return (
    <div>
      <Mutc_tracks />
      <RegistrationForm />
      <MutcFooter />
    </div>
  );
}

export default Tracks;
