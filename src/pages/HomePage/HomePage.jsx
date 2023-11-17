import React from "react";
import LetterForm from "../../components/LetterForm/LetterForm";
import Letters from "../../components/Letters/Letters";
import Members from "../../components/Members";
import SelectedMember from "../../components/SelectedMember";

function HomePage() {
  return (
    <div>
      <Members />
      <SelectedMember />
      <LetterForm />
      <Letters />
    </div>
  );
}

export default HomePage;
