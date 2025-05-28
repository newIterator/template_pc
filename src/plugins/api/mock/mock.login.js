import lscache from "lscache"
const register = (data) =>{
  let body = JSON.parse(data.body)
  let status = 200;
  let userList = [] // 
  lscache.set('userList',userList)
  return {
    status,
    message,
    data:{
      code: status
    }
  }
}

const login = (data) =>{
  let body = JSON.parse(data.body)
  let status = 200
  return {
    status,
    message,
    data:{
      code: status
    }
  }
}
const demoList = (data) => {
  console.log('response',JSON.parse(data.body))
  return {
    status: 200,
    message: "success",
    data: {
      total: 100,
      "rows|10": [
        {
          id: "@guid",
          name: "@cname",
          "age|20-30": 23,
          "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
        },
      ],
    },
  };
};


export default {
  "post|/login": login,
  "post|/parameter/query": demoList,
};
