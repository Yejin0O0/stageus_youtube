import React from 'react';

// class ImgComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//   render() {
//     <img src={ImgData.src} className={ImgData.class} alt="파일 읽기 오류. 지원하지 않는 파일 형식이나 파일이 손상되었습니다."/>

//   }
// }

// export default ImgComponent; 

const ImgComponent = (props) => {
    const {ImgData} = props
    return (
        <img src={ImgData.src} className={ImgData.class} alt="파일 읽기 오류. 지원하지 않는 파일 형식이나 파일이 손상되었습니다."/>
    )
}
export default ImgComponent
