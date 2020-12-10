import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
    return (
        <Svg
            width={580}
            height={141}
            viewBox='0 0 414 92'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 0l9 8.903c8 9.645 26 28.194 43 40.065 17 12.613 34 18.548 52 14.096 17-4.451 34-20.032 51-17.064 18 2.968 35 24.484 52 35.613C224 92 242 92 259 89.033c17-2.969 34-9.646 52-21.517 17-12.613 34-30.42 51-27.452 18 2.968 35 27.452 43 39.323L414 92H0V0z'
                fill='#fff'
            />
        </Svg>
    );
}

export default SvgComponent;
