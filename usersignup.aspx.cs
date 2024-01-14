using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OnlineBookstore
{
    public partial class usersignup : System.Web.UI.Page
    {
        string strcon = ConfigurationManager.ConnectionStrings["con"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        // sign up button click event
        protected void Button1_Click(object sender, EventArgs e)
        {
            if (checkMemberExists())
            {

                Response.Write("<script>alert('Member Already Exist with this Member ID, try other ID');</script>");
            }
            else
            {
                signUpNewMember();
            }
        }

        // user defined method
        bool checkMemberExists()
        {
            try
            {
                SqlConnection con = new SqlConnection(strcon);
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand("SELECT * FROM member WHERE member_id='" + TextBox8.Text.Trim() + "';", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count >= 1)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('" + ex.Message + "');</script>");
                return false;
            }
        }
        void signUpNewMember()
        {
            //Response.Write("<script>alert('Testing');</script>");
            try
            {
                SqlConnection con = new SqlConnection(strcon);
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand("INSERT INTO member(member_id,password) values(@member_id,@password)", con);
                
                cmd.Parameters.AddWithValue("@member_id", TextBox8.Text.Trim());
                cmd.Parameters.AddWithValue("@password", TextBox9.Text.Trim());

                SqlCommand query = new SqlCommand("INSERT INTO information(member_id,full_name, city, state, full_address ,dob , CVV, contact_number) values(@member_id, @full_name, @city, @state, @full_address , @dob , @CVV, @contact_number)", con);
                query.Parameters.AddWithValue("@member_id", TextBox8.Text.Trim());
                query.Parameters.AddWithValue("@full_name", TextBox1.Text.Trim());
                query.Parameters.AddWithValue("@city", TextBox6.Text.Trim());
                query.Parameters.AddWithValue("@state", DropDownList1.SelectedItem.Value);
                query.Parameters.AddWithValue("@full_address", TextBox5.Text.Trim());
                query.Parameters.AddWithValue("@dob", TextBox2.Text.Trim());
                query.Parameters.AddWithValue("@CVV", TextBox7.Text.Trim());
                query.Parameters.AddWithValue("@contact_number", TextBox3.Text.Trim());
                //query.Parameters.AddWithValue("@email", TextBox4.Text.Trim());


                cmd.ExecuteNonQuery();
                query.ExecuteNonQuery();

                con.Close();
                Response.Write("<script>alert('Sign Up Successful. Go to User Login to Login');</script>");
                Response.Redirect("userlogin.aspx");
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('" + ex.Message + "');</script>");
            }
        }

    }
}