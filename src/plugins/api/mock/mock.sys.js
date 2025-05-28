const Obj = {

}
const dogdetail = (data) => {
  // console.log('response',JSON.parse(data.body))
  const { shiba  } = JSON.parse(data.body)
  const list = Obj[shiba]
  return {
    status: 200,
    message: "success",
    data: {
      list
    },
  };
};


export default {
  "post|/dog/detail": dogdetail,
};
