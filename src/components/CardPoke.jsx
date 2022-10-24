import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CardPoke = () => {
  const [pokemon, setPokemon] = useState([]);

  const information = () => {
    axios.get(" https://pokeapi.co/api/v2/pokemon?limit=255").then((resp) => {
      for (let info = 0; info < resp.data.results.length; info++) {
        axios.get(resp.data.results[info].url).then((result) => {
          setPokemon((prevArray) => [...prevArray, result.data]);
        });
      }
    });
  };
  console.log(pokemon);
  useEffect(information, []);

  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3}>
          {pokemon.map((pokemon, index) => {
            return (
              <Col>
                <Card style={{ width: "15rem", margin: "0.2rem" }}>
                  <Card.Img variant="top" src={pokemon.sprites.front_default} />
                  <Card.Body>
                    <Card.Title key={index}>{pokemon.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <h5>Abilities: {pokemon.abilities[0].ability.name}</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <h5> Expirience: {pokemon.base_experience}</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <h5>Species : {pokemon.species.name}</h5>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
