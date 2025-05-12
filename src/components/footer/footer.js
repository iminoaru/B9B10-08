import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <FooterLeft>
                <span>B9B10-08</span>
            </FooterLeft>
            <FooterRight>
                {/* Social links removed */}
            </FooterRight>
        </Nav>
    )
}

export default header

const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const FooterLeft = styled.div`
    display: flex;
    width:50%;

    span {
        text-align: center;
    }
`

const FooterRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width:50%;

    a {
        padding-right: 20px;
    }

    img {
        height: 30px;
    }
`