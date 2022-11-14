import { postPicture } from "../../../../apis/search";
import { SearchBtn } from "../../../../common/Button";
import { Theme } from "../../../../styles/theme";
import { Wrapper } from "./styles";

const SelectButton = () => {
  const setFile = (event: any) => {
    console.log(event.target.files[0]);
    console.log(typeof event.target.files[0]);
    postPicture(event.target.files[0]);
  };
  return (
    <Wrapper>
      <h1>사진으로 식물을 검색해보세요!</h1>
      <div className="button-wrap">
        <div className="file-select">
          <label htmlFor="camera-file">갤러리</label>
          <input
            type={"file"}
            id="camera-file"
            onChange={setFile.bind(this)}
          ></input>
        </div>

        <SearchBtn color={Theme.color.ivory} path={`ai-search/camera`}>
          카메라 촬영
        </SearchBtn>
      </div>
    </Wrapper>
  );
};

export default SelectButton;
