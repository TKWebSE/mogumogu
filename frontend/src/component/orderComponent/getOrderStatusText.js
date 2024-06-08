import { ORDER_TEXT, ORDER_STATUS_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";


export const getOrderStatusText = (order_status) => {

  switch (order_status) {
    case ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED:
      return {
        STATUS_TEXT: ORDER_STATUS_TEXT.ORDER_STATUS_UNFINISHED_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION:
      return {
        STATUS_TEXT: ORDER_STATUS_TEXT.ORDER_STATUS_PENDINGEVALUATION_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.COMPLETE_ORDER:
      return {
        STATUS_TEXT: ORDER_STATUS_TEXT.ORDER_STATUS_FINISHED_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL:
      return {
        STATUS_TEXT: ORDER_STATUS_TEXT.ORDER_STATUS_ORDER_CANCEL_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL:
      return {
        STATUS_TEXT: ORDER_STATUS_TEXT.ORDER_STATUS_TASK_CANCEL_TEXT,
      }
  }
}
