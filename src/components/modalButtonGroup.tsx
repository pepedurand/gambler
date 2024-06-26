import { useLeonConfigDispatch } from "@/context/leonConfigContext";
import { primaryColor, primaryColorHover } from "@/types/colors";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function ModalButtonGroup({
  leftButtonTitle,
  rightButtonTitle,
  rightButtonLoadingText,
  isStepAble,
  leftButtonDestiny,
  dispatchAction,
  isLastStep,
}: {
  leftButtonTitle: string;
  rightButtonTitle: string;
  rightButtonLoadingText: string;
  isStepAble: boolean;
  leftButtonDestiny?: string;
  dispatchAction:
    | "SET_COMPLETED_FIRST_STEP"
    | "SET_COMPLETED_SECOND_STEP"
    | "SET_COMPLETED_THIRD_STEP"
    | "SET_HAS_DONE_ALL_STEPS";
  isLastStep?: boolean;
}) {
  const { dispatch } = useLeonConfigDispatch();
  const [isRightButtonLoading, setIsRightButtonLoading] = useState(true);

  function onLeftButtonClick() {
    isLastStep
      ? setIsRightButtonLoading(false)
      : setTimeout(() => {
          setIsRightButtonLoading(false);
        }, 3000);
  }

  function onRightButtonClick() {
    dispatch({ type: dispatchAction, payload: true });
  }

  return (
    <Flex justify="center" gap="12px">
      <Button
        isDisabled={!isStepAble}
        backgroundColor={primaryColor}
        onClick={onLeftButtonClick}
        width="200px"
        color="#000"
        _hover={{ backgroundColor: primaryColorHover }}
      >
        {leftButtonDestiny ? (
          <Link target="_blank" href={leftButtonDestiny}>
            {leftButtonTitle}
          </Link>
        ) : (
          <>{leftButtonTitle}</>
        )}
      </Button>
      <Button
        isLoading={isRightButtonLoading}
        loadingText={rightButtonLoadingText}
        isDisabled={!isStepAble}
        colorScheme="green"
        width="200px"
        onClick={onRightButtonClick}
      >
        {rightButtonTitle}
      </Button>
    </Flex>
  );
}
