| Api Route |
| --------- |
| Method    | Enpoint | Payload | Response | Action |
| GET       | /todos | \- | \[todos\] | Get All Todos form DB |
| POST      | /todos | {"title":String,"completed":Bollean} | {todo} | Create new Todo |
| PUT       | /todos/:id | {"title":String,"completed":Bollean} | {todo} | Update Existing Todo by ID |
| DELETE    | /todos/:id | \- | \- | Deletes todo |