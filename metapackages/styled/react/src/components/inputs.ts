import styled from 'styled-components';



export const StyledSwitch: any = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input + .slider {
        /* background-color: #2196F3; */
        background-color: ${(props: any) => {
            if (props.backgroundColor) {
                return props.backgroundColor;
            }

            return 'hsl(247, 19%, 29%)';
        }};
        /* background-color: hsla(220, 20%, 20%, 0.5); */
        box-shadow: inset 0 2px 3px black;
    }

    /* input:focus + .slider {
        box-shadow: 0 0 1px black;
    } */

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;