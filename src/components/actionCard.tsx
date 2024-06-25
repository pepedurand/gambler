import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";

export default function ActionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card
      style={{
        borderRadius: "10px",
        backdropFilter: "blur(5px)",
      }}
      width="200px"
      height="200px"
    >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
}
