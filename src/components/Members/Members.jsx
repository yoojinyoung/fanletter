import React from "react";
import { useDispatch } from "react-redux";
import { memberActionCreators } from "../../redux/slices/member.slice";

const members = [
  { name: "채원" },
  { name: "카즈하" },
  { name: "윤진" },
  { name: "사쿠라" },
  { name: "은채" },
];

function Members() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleClickMember = (memberName) => {
    // 요 아래 녀석이 액션크리에이터
    const createSelectMemberAction =
      memberActionCreators.createSelectMemberAction;

    // 액션크리에이터로 액션 생성
    const selectMemberAction = createSelectMemberAction({
      memberName: memberName,
    });

    // 만들어진 액션을 디스패치 한다. (디스패치 함수에 인자로 넣어서 실행한다)
    dispatch(selectMemberAction);
  };

  return (
    <ul
      style={{
        padding: 0,
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "0.5rem",
        background: "magenta",
      }}
    >
      {members.map((member) => (
        <li>
          <button onClick={() => handleClickMember(member.name)}>
            {member.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Members;
