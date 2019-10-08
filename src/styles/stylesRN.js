import styled from "styled-components/native";

export const VieW = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #008b8b;
    margin-top: ${props => props.margintop || 0};
`;

export const FormRoW = styled.View`
    padding: 30px;
    margin-left: 20;
    margin-right: 20; 
    background-color: #f5f5f5;
    margin-top: 5;
    margin-bottom: 5;
    border-radius: 5;
`;

export const TextInpuT = styled.TextInput`
    border-color: black;
    border-bottom-width: 1;
    padding-left: 5;
    padding-right: 5;
    padding-bottom: 10;
    font-size: 20;
`;

export const TexT = styled.Text``;

export const ButtoN = styled.Button`
    color: #696969;
`;

