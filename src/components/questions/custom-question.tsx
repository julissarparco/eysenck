import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { questions, Question } from "../../data/question";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Router from "next/router";

type QuestionProps = {};

type QuestionDetail = {
  question: number;
  answer: string;
};

const steps: Question[] = questions;

const CustomQuestion = ({}: QuestionProps) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState<QuestionDetail[]>([]);

  const maxSteps = steps.length;

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setDisabledNext(true);

      const item: QuestionDetail = {
        question: activeStep + 1,
        answer: input,
      };
      answer.push(item);
      setAnswer((prevAnswer) => [...prevAnswer]);

      const random = Math.random();
      localStorage.setItem(`${random}`, JSON.stringify(answer));
      Router.push({
        pathname: "/result",
        query: { id: random },
      });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      if (activeStep > 0) {
        const item: QuestionDetail = {
          question: activeStep,
          answer: input,
        };
        
        answer.push(item);
        setAnswer((prevAnswer) => [...prevAnswer]);
      }

      setInput("");
    }
    console.log(answer);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    answer.find((item, index) => {
      if (item.question.toString() === (activeStep - 1).toString()) {
        setInput(item.answer);
      }
    });
  };

  const handleRadioAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((event.target as HTMLInputElement).value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
        key={`paper_${steps[activeStep].id}`}
      >
        <Typography>{`${steps[activeStep]?.label}`}</Typography>
      </Paper>
      <Box sx={{ width: "100%", p: 2 }}>
        <div
          dangerouslySetInnerHTML={{ __html: steps[activeStep]?.text }}
        ></div>
      </Box>
      {!steps[activeStep]?.isPrincipal ? (
        <Box
          sx={{ height: 255, p: 2 }}
          key={`box_question_${steps[activeStep]?.id}`}
        >
          <FormControl>
            <FormLabel
              id={`question-row-radio-buttons-group-label_${steps[activeStep]?.id}`}
            >
              Elige tu respuesta
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby={`question-row-radio-buttons-group-label_${steps[activeStep]?.id}`}
              name={`rbg-${steps[activeStep]?.id}`}
              onChange={handleRadioAnswer}
              value={input}
            >
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="Sí"
              />
              <FormControlLabel
                value="0"
                control={<Radio required={true} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      ) : (
        <div></div>
      )}
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={disabledNext}>
            {activeStep === maxSteps - 1 ? "Finalizar" : "Siguiente"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atrás
          </Button>
        }
      />
    </Box>
  );
};

export default CustomQuestion;
