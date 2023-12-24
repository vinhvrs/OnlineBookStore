<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="userlogin.aspx.cs" Inherits="OnlineBookstore.userlogin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <center><img width="150px" src="imgs/generaluser.png" />

                            </center>
                        </div>
                            </div>

                            <div class="row">
                                    <div class="col">
                            <center>
                                <h3>Member Login</h3>

                            </center>
                            </div>
                          </div>


                            <div class="row">
                                    <div class="col">
                                <hr />
                            </div>
                          </div>


                            <div class="row">
                                    <div class="col">
                                        <label>ID</label>
                                        <div class="form-group">
                                            <asp:TextBox CssClass="form-control" ID="TextBox1" runat="server" placeholder ="Member ID" OnTextChanged="TextBox1_TextChanged"> </asp:TextBox>                                
                                </div>
                                        <label>Password</label>
                                        <div class="form-group">
                                            <asp:TextBox CssClass="form-control" ID="TextBox2" runat="server" placeholder ="Password" TextMode="Password" OnTextChanged="TextBox2_TextChanged"> </asp:TextBox>                                
                                </div>

                                        <div class="form-group">
                                            <asp:Button class="btn btn-success btn-block btn-lg" ID="Button1" runat="server" Text="log In" OnClick="Button1_Click" />
                                        </div>

                                        <div class="form-group">
                                          <a href="usersignup.aspx"><input class="btn btn-info btn-block" ID="Button2" type="button" Value="Sign Up" /></a>
                                        </div>
                            </div>
                          </div>

                </div>
            </div>
            <a href="homepage.aspx"> Back to Home </a><br />
        </div>
    </div>
</div>

</asp:Content>
