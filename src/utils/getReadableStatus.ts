import { Status } from "../types/Status";

export function getReadableStatus(status: Status) {
  switch (status) {
    case Status.TODO:
      return "To Do";
    case Status.IN_PROGRESS:
      return "In Progress";
    case Status.DONE:
      return "Done";
    default:
      return status;
  }
}
