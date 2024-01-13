<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="homepage.aspx.cs" Inherits="OnlineBookstore.homepage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <selection>
        <div>
            <center>
                <img src="imgs/home-bg1.png" class="img-fluid" />
    </selection>
    <selection>
        <div class="container">
            <div class="row">
                <div class="col-12 mx-auto">
                    <center>
                        <h1>E-Lib</h1>

                    </center>
                </div>
            </div>

            <div class="row">

                <div class="col-md-4 mx-auto">
                    <center>
                        <a href="adminbookinventory.aspx" style="text-decoration: none; color: #000000">
                            <img width="150px" src="imgs/digital-inventory1.png" />
                            <h4>Digital Book Inventory</h4>
                        </a>
                </div>

                <div class="col-md-4 mx-auto">
                    <center>
                        <img width="150px" src="imgs/search-onlie1.png" />
                        <h4>Search Books</h4>

                    </center>
                </div>

                <div class="col-md-4 mx-auto">
                    <center>
                        <a href="adminauthormanagement.aspx" style="text-decoration: none; color: #000000">
                            <img width="150px" src="imgs/writer.png" />
                            <h4>Author List</h4>
                    </center>
                </div>
            </div>

            </center>
        </div>
    </selection>
    <selection>

        <div class="container">


            <div class="row">

                <div class="col-md-4 mx-auto">
                    <center>
                        <img width="150px" src="imgs/sign-up1.png" />
                        <h4>Sign Up</h4>
                </div>


                <div class="col-md-4 mx-auto">
                    <center>
                        <img width="150px" src="imgs/library1.png" />
                        <h4>Visit Us</h4>
                    </center>
                </div>
            </div>

            </center>
        </div>
    </selection>
    </a>
</asp:Content>
