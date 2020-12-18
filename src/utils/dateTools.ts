export class DateTools {
  numberToDate(num: number) {
    const formatDate = new Date(num);
    return formatDate.toLocaleString();
  }

  isAtThisDay(date, numberDate) {
    let day = date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const curDate = date.getFullYear() + '/' + month + '/' + day;
    const activityDate = (new Date(numberDate)).toLocaleDateString();
    return curDate === activityDate;
  }

  isInThisMonth(date, numberDate) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const activityDate = new Date(numberDate);
    const activityMonth = activityDate.getMonth();
    const activityYear = activityDate.getFullYear();
    return month === activityMonth && year === activityYear;
  }

}
