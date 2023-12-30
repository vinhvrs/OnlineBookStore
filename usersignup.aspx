 <%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="usersignup.aspx.cs" Inherits="OnlineBookstore.usersignup" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
   
   <div class="container">
      <div class="row">
         <div class="col-md-8 mx-auto">
            <div class="card">
               <div class="card-body">
                  <div class="row">
                     <div class="col">
                        <center>
                           <img width="100px" src="imgs/generaluser.png"/>
                        </center>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col">
                        <center>
                           <h4>Member Sign Up</h4>
                        </center>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col">
                        <hr>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <label>Full Name</label>
                        <div class="form-group">
                           <asp:TextBox CssClass="form-control" ID="TextBox1" runat="server" placeholder="Full Name"></asp:TextBox>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <label>Date of Birth</label>
                        <div class="form-group">
                           <asp:TextBox CssClass="form-control" ID="TextBox2" runat="server" placeholder="Password" TextMode="Date"></asp:TextBox>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <label>Contact No</label>
                        <div class="form-group">
                           <asp:TextBox CssClass="form-control" ID="TextBox3" runat="server" placeholder="Contact No" TextMode="Number"></asp:TextBox>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <label>Email ID</label>
                        <div class="form-group">
                           <asp:TextBox CssClass="form-control" ID="TextBox4" runat="server" placeholder="Email ID" TextMode="Email"></asp:TextBox>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-4">
                        <label>State</label>
                        <div class="form-group">
                             <asp:DropDownList CssClass="form-control" ID="DropDownList1" runat="server">
     <asp:ListItem Text="Select" Value="Select" />
    <asp:ListItem Text="Select" Value="Select" />
    <asp:ListItem Text="An Giang" Value="An Giang" />
    <asp:ListItem Text="Ba Ria - Vung Tau" Value="Ba Ria - Vung Tau" />
    <asp:ListItem Text="Bac Giang" Value="Bac Giang" />
    <asp:ListItem Text="Bac Kan" Value="Bac Kan" />
    <asp:ListItem Text="Bac Lieu" Value="Bac Lieu" />
    <asp:ListItem Text="Bac Ninh" Value="Bac Ninh" />
    <asp:ListItem Text="Ben Tre" Value="Ben Tre" />
    <asp:ListItem Text="Binh Dinh" Value="Binh Dinh" />
    <asp:ListItem Text="Binh Duong" Value="Binh Duong" />
    <asp:ListItem Text="Binh Phuoc" Value="Binh Phuoc" />
    <asp:ListItem Text="Binh Thuan" Value="Binh Thuan" />
    <asp:ListItem Text="Ca Mau" Value="Ca Mau" />
    <asp:ListItem Text="Cao Bang" Value="Cao Bang" />
    <asp:ListItem Text="Dak Lak" Value="Dak Lak" />
    <asp:ListItem Text="Dak Nong" Value="Dak Nong" />
    <asp:ListItem Text="Dien Bien" Value="Dien Bien" />
    <asp:ListItem Text="Dong Nai" Value="Dong Nai" />
    <asp:ListItem Text="Dong Thap" Value="Dong Thap" />
    <asp:ListItem Text="Gia Lai" Value="Gia Lai" />
    <asp:ListItem Text="Ha Giang" Value="Ha Giang" />
    <asp:ListItem Text="Ha Nam" Value="Ha Nam" />
    <asp:ListItem Text="Ha Tinh" Value="Ha Tinh" />
    <asp:ListItem Text="Hai Duong" Value="Hai Duong" />
    <asp:ListItem Text="Hau Giang" Value="Hau Giang" />
    <asp:ListItem Text="Hoa Binh" Value="Hoa Binh" />
    <asp:ListItem Text="Hung Yen" Value="Hung Yen" />
    <asp:ListItem Text="Khanh Hoa" Value="Khanh Hoa" />
    <asp:ListItem Text="Kien Giang" Value="Kien Giang" />
    <asp:ListItem Text="Kon Tum" Value="Kon Tum" />
    <asp:ListItem Text="Lai Chau" Value="Lai Chau" />
    <asp:ListItem Text="Lang Son" Value="Lang Son" />
    <asp:ListItem Text="Lao Cai" Value="Lao Cai" />
    <asp:ListItem Text="Lam Dong" Value="Lam Dong" />
    <asp:ListItem Text="Long An" Value="Long An" />
    <asp:ListItem Text="Nam Dinh" Value="Nam Dinh" />
    <asp:ListItem Text="Nghe An" Value="Nghe An" />
    <asp:ListItem Text="Ninh Binh" Value="Ninh Binh" />
    <asp:ListItem Text="Ninh Thuan" Value="Ninh Thuan" />
    <asp:ListItem Text="Phu Tho" Value="Phu Tho" />
    <asp:ListItem Text="Phu Yen" Value="Phu Yen" />
    <asp:ListItem Text="Quang Binh" Value="Quang Binh" />
    <asp:ListItem Text="Quang Nam" Value="Quang Nam" />
    <asp:ListItem Text="Quang Ngai" Value="Quang Ngai" />
    <asp:ListItem Text="Quang Ninh" Value="Quang Ninh" />
    <asp:ListItem Text="Quang Tri" Value="Quang Tri" />
    <asp:ListItem Text="Soc Trang" Value="Soc Trang" />
    <asp:ListItem Text="Son La" Value="Son La" />
    <asp:ListItem Text="Tay Ninh" Value="Tay Ninh" />
    <asp:ListItem Text="Thai Binh" Value="Thai Binh" />
    <asp:ListItem Text="Thai Nguyen" Value="Thai Nguyen" />
    <asp:ListItem Text="Thanh Hoa" Value="Thanh Hoa" />
    <asp:ListItem Text="Thua Thien Hue" Value="Thua Thien Hue" />
    <asp:ListItem Text="Tien Giang" Value="Tien Giang" />
    <asp:ListItem Text="Tra Vinh" Value="Tra Vinh" />
    <asp:ListItem Text="Tuyen Quang" Value="Tuyen Quang" />
    <asp:ListItem Text="Vinh Long" Value="Vinh Long" />
    <asp:ListItem Text="Vinh Phuc" Value="Vinh Phuc" />
    <asp:ListItem Text="Yen Bai" Value="Yen Bai" />
    <asp:ListItem Text="Can Tho" Value="Can Tho" />
    <asp:ListItem Text="Da Nang" Value="Da Nang" />
    <asp:ListItem Text="Ha Noi" Value="Ha Noi" />
    <asp:ListItem Text="Hai Phong" Value="Hai Phong" />
    <asp:ListItem Text="Ho Chi Minh" Value="Ho Chi Minh" />
     </asp:DropDownList>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <label>City</label>
                        <div class="form-group">
                           <asp:TextBox class="form-control" ID="TextBox6" runat="server" placeholder="City"></asp:TextBox>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <label>Pincode</label>
                        <div class="form-group">
                           <asp:TextBox class="form-control" ID="TextBox7" runat="server" placeholder="Pincode" TextMode="Number"></asp:TextBox>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col">
                        <label>Full Address</label>
                        <div class="form-group">
                           <asp:TextBox CssClass="form-control" ID="TextBox5" runat="server" placeholder="Full Address" TextMode="MultiLine" Rows="2"></asp:TextBox>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col">
                        <center>
                           <span class="badge badge-pill badge-info">Login Credentials</span>
                        </center>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <label>Member ID</label>
                        <div class="form-group">
                           <asp:TextBox class="form-control" ID="TextBox8" runat="server" placeholder="User ID" ></asp:TextBox>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <label>Password</label>
                        <div class="form-group">
                           <asp:TextBox class="form-control" ID="TextBox9" runat="server" placeholder="Email ID" TextMode="Password"></asp:TextBox>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col">
                        <div class="form-group">
                           <asp:Button class="btn btn-primary btn-block btn-lg" ID="Button1" runat="server" Text="Sign Up" OnClick="Button1_Click" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a href="homepage.aspx"><< Back to Home</a><br><br>
         </div>
      </div>
   </div>

</asp:Content>

