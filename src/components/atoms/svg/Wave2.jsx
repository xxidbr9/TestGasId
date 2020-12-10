import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
    return (
        <Svg
            width={600}
            height={111}
            viewBox='0 0 389 111'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M-108 0l10.804 10.742c9.604 11.637 31.213 34.016 51.621 48.339C-25.167 74.298-4.758 81.46 16.85 76.089c20.408-5.371 40.817-24.17 61.225-20.589 21.609 3.58 42.017 29.54 62.425 42.968C160.908 111 182.517 111 202.925 107.419c20.408-3.58 40.817-11.637 62.425-25.96 20.408-15.217 40.817-36.7 61.225-33.12 21.609 3.58 42.017 33.12 51.621 47.443L389 111H-108V0z'
                fill='#8BB9F6'
            />
        </Svg>
    );
}

export default SvgComponent;
