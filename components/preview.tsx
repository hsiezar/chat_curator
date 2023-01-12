import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

  interface FuncProps { 
    curList: string,
  }

  export default function PreviewCard(props: FuncProps) {
    if (!Boolean(props.curList)) {
        return(<></>)
      }
    return (
      <Card className="w-96">
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            props.curList
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
        <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded-full disabled:opacity-50">
            Create
        </button>
        </CardFooter>
      </Card>
    );
  }