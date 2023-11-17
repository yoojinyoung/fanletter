import React from "react";
import { useSelector } from "react-redux";

function SelectedMember() {
  const selectedMemberName = useSelector(
    (state) => state.member.selectedMemberName
  );

  return (
    <div style={{ textAlign: "center", background: "skyblue" }}>
      {selectedMemberName === null
        ? "지금은 선택된 멤버가 없어요"
        : `지금 선택된 멤버는 "${selectedMemberName}"입니다.`}
    </div>
  );
}

export default SelectedMember;
