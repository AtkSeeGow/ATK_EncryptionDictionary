declare const $: any;

export class HttpErrorHandler {
  static Notify(httpErrorResponse: any) {
    if (httpErrorResponse.error.errorMessages) {
      for (let key in httpErrorResponse.error.errorMessages)
        $.notify({ icon: "tim-icons icon-bell-55", message: httpErrorResponse.error.errorMessages[key] }, { type: 'warning', delay: 0, placement: { from: 'top', align: 'right' } });
    }
    else {
      $.notify({ icon: "tim-icons icon-bell-55", message: "系統發生錯誤，請與系統管理員聯絡。" }, { type: 'warning', delay: 0, placement: { from: 'top', align: 'right' } });
    }
  }
}
