PGDMP         1                {            inventory_db    14.1    14.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24984    inventory_db    DATABASE     p   CREATE DATABASE inventory_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE inventory_db;
                postgres    false            �            1259    24998    products    TABLE     �   CREATE TABLE public.products (
    userid character varying(50),
    name character varying(50),
    price character varying(50),
    currency character varying(50),
    createdat date,
    updatedat date,
    id character varying(50) NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    24986    users    TABLE     �   CREATE TABLE public.users (
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(200) NOT NULL,
    createdat date,
    updatedat date,
    id character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    24998    products 
   TABLE DATA           [   COPY public.products (userid, name, price, currency, createdat, updatedat, id) FROM stdin;
    public          postgres    false    210   �       �          0    24986    users 
   TABLE DATA           P   COPY public.users (name, email, password, createdat, updatedat, id) FROM stdin;
    public          postgres    false    209   �       `           2606    24994    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    209            b           2606    24992    users users_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT users_name_key;
       public            postgres    false    209            d           2606    24996    users users_password_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_password_key UNIQUE (password);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_password_key;
       public            postgres    false    209            �   <   x�3�0�41213��0�,IMI+NI�42�vRFƺ��F��1~����&F\1z\\\ U�r      �   �   x�����S(��,���J�M-3�s3s���s9U��TTB��<}s��"L<�-s��2*�M�J�ݽ|=���}���"#�Ӌ�s���B�JLL*9���u,u�9c�8�-�,M�L�,-��b���� �$V     