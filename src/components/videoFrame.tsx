import { Flex, Heading } from "@chakra-ui/react";

export default function VideoFrame({
  width = 400,
  height = 200,
  src,
  title,
}: {
  width?: number;
  height?: number;
  src: string;
  title: string;
}) {
  return (
    <Flex direction="column" gap="8px">
      <Heading size="6">{title}</Heading>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Flex>
  );
}
