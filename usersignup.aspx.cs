using System;using System.Collections.Generic;using System.ComponentModel.DataAnnotations.Schema;using System.Configuration;using System.Data.SqlClient;using System.Linq;using System.Web;using System.Web.UI;using System.Web.UI.WebControls;using System.Drawing.Printing;namespace OnlineBookstore{    public partial class usersignup : System.Web.UI.Page    {        string strcon = ConfigurationManager.ConnectionStrings["con"].ConnectionString;        protected void Page_Load(object sender, EventArgs e)        {
            Console.WriteLine(strcon);        }        protected void TextBox1_TextChanged(object sender, EventArgs e)        {        }        // Sign up button click event        protected void Button1_Click(object sender, EventArgs e)        {            Response.Write("<script>alert('Sign Up Successful. Go to User Login to Login');</script>");
            //try
            //{
                          SqlConnection con = new SqlConnection();
                con.ConnectionString = strcon;                if (con.State == System.Data.ConnectionState.Closed)                {                    con.Open();                }

            // WAIT FOR PARAMETERS
            SqlCommand query = new SqlCommand("INSERT INTO member_master_tbl(full_name, dob, contact_no, email, state, city, pincode, full_address, member_id, password, account_status) values(@fullname_name, @dob, @contact_no, @email, @state, @city, @pincode, @full_address, @member_id, @password, @account_status)", con);
            query.Parameters.AddWithValue("@full_name", TextBox1.Text.Trim());
            query.Parameters.AddWithValue("@dob", TextBox2.Text.Trim());
            query.Parameters.AddWithValue("@contact_no", TextBox3.Text.Trim());
            query.Parameters.AddWithValue("@email", TextBox4.Text.Trim());
            query.Parameters.AddWithValue("@state", DropDownList1.SelectedItem.Value);
            query.Parameters.AddWithValue("@city", DropDownList1.SelectedItem.Value);
            //query.Parameters.AddWithValue("@pincode", TextBox7.Text.Trim());
            query.Parameters.AddWithValue("@full_address", TextBox5.Text.Trim());
            //query.Parameters.AddWithValue("@member_id", TextBox8.Text.Trim());
            //query.Parameters.AddWithValue("@password", TextBox9.Text.Trim());
            query.Parameters.AddWithValue("@account_status", "pending");
            // THIS IS FOR SIGn UP


            //// Test
            //SqlCommand query = new SqlCommand("INSERT INTO author_master_tbl(author_name, author_id) VALUES(@full_name, @contact_no) ", con);
            //query.Parameters.AddWithValue("@full_name", TextBox1.Text.Trim());
            //query.Parameters.AddWithValue("@contact_no", TextBox3.Text.Trim());
            //// -- END TEST
            query.ExecuteNonQuery();                Response.Write("<script>alert('Sign Up Successful. Go to User Login to Login');</script>");                con.Close();                           //}            //catch (Exception ex)            //{            //}        }    }}