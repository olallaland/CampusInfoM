export class DateTools {
  numberToDate(num: number) {
    const formatDate = new Date(num);
    return formatDate.toLocaleString();
  }

  isAtThisDay(date, startDate, endDate) {
    const curDate = this.toFormatDateString(date);
    const activityStartDate = this.toFormatDateString(new Date(startDate));
    const activityEndDate = this.toFormatDateString(new Date(endDate));
    return curDate.localeCompare(activityStartDate) >= 0 && curDate.localeCompare(activityEndDate) <= 0;
  }

  isInThisMonth(date, startDate, endDate) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const curDate = year + '-' + month;
    const activityStartDate = this.toFormatDateString(new Date(startDate)).substr(0, 7);
    const activityEndDate = this.toFormatDateString(new Date(endDate)).substr(0, 7);
    return curDate.localeCompare(activityStartDate) >= 0 && curDate.localeCompare(activityEndDate) <= 0;
  }

  /**
   * 将输入日期转化为‘YYYY-MM-DD’格式的字符串
   */
  toFormatDateString(date) {
    let day = date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return date.getFullYear() + '-' + month + '-' + day;
  }

}
