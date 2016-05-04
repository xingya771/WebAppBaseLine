<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include  file="../../../base/head.html"%>
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
    登录
</button>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Login</h4>
            </div>
            <div class="modal-body">
                <%@include  file="../../../base/login.html"%>
            </div>
            <!--div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div-->
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.moda

<%@include  file="../../../base/footer.html"%>


