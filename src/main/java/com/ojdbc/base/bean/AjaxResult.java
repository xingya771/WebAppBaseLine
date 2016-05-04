package com.ojdbc.base.bean;

/**
 * Created by Arthur on 2016/3/21.
 */
public class AjaxResult {

    private boolean isSuccess;
    private String msg;

    public AjaxResult(boolean isSuccess,String msg){
        this.isSuccess=isSuccess;
        this.msg=msg;
    }
    public boolean isSuccess() {
        return isSuccess;
    }

    public void setSuccess(boolean success) {
        isSuccess = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
