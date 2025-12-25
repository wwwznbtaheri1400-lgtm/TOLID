function showMessage(plan) {
  let message = "";
  switch (plan) {
    case "base":
      message = "پلن پایه انتخاب شد ✅";
      break;
    case "silver":
      message = "پلن نقره‌ای انتخاب شد ✅";
      break;
    case "gold":
      message = "پلن طلایی انتخاب شد ✅";
      break;
    default:
      message = "پلن نامشخص!";
  }
  alert(message);
}

