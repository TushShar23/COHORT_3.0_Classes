interface Todo {
  userId: number;
  Id: number;
  title: string;
  complete: boolean;
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    if (!response.ok) {
    //The "ok" read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.
      throw new Error(`HTTP error: ,${response.status} `);
    }
    const finalRes: Todo = await response.json();
    console.log(finalRes);
  } catch (error: any) {
    console.log("Error: ",error);
  }
};

fetchData()