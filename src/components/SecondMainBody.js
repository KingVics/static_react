import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10rem;

  @media screen and (max-width: 1024px) {
    margin: 0 2rem;
  }
`;

const Heading = styled.div`
  color: rgb(74, 144, 226);
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const Body = styled.div``;

const SecondMainBody = () => {
  return (
    <Container>
      <Heading>
        We are not just providing a website, we are providing a Content
        Management System
      </Heading>

      <Body>
        We do not own the content; you do. It is important to understand that
        everything belongs to you. You can add unlimited pages, which is super
        easy to do using a content management system. This offer includes free
        training on the content management system for those who need or want to
        know the basics of managing a website. We can help you get started with
        our free training to help you know to add, and edit website content, and
        add pages to your website.
      </Body>
    </Container>
  );
};

export default SecondMainBody;
