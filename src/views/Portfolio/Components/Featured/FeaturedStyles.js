// @import '../../../../styles/config.scss';
import styled from 'styled-components'

export const StyledFeatured = styled.div`
&#featured {
    margin: 40px 22px 0 22px;

    @media screen and (max-width: 630px) {
        margin: 35px 10px 0 10px;
    }

    .container {
        h2 {
            font-size: 12px;
            font-weight: 600;
            margin-left: 5px;
        }
    }

    .card-container {
        margin-top: 15px;
        background: linear-gradient(to right, #0575e6, #021b79);

        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
        width: 100%;
        min-height: 131px;
        border-radius: 12px;

        @media screen and (max-width: 630px) {
            margin-top: 20px;
        }

        .wrapper {
            text-align: center;
            padding: 20px 20px;

            h3 {
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 20px;
                color: ${(props) => props.theme.primary};
            }

            button {
                padding: 5px 10px;
                border-radius: 5px;
                box-shadow: 0px 0px 5px #ccc;
                font-size: 12px;
                color: $navy-blue-text;
            }
        }

    }
}
`

